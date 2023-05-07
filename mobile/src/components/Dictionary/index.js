import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { X, Lock, ArrowLeft } from 'react-native-feather';
import { Text } from '../Text';

import Modal from 'react-native-modal';
import theme from '../../global/styles/theme';
import api from '../../services/api';
import * as C from './styles';

export function Dictionary({ isVisible, setIsVisible, topicId }) {
  const { loggedUser } = useAuth([]);
  const [topics, setTopics] = useState([]);
  const [title, setTitle] = useState('Dicionário');
  const [texts, setTexts] = useState([]);
  const [isTopicContentVisible, setIsTopicContentVisible] = useState(false);

  function showTopicContent(title, texts) {
    setTitle(title);
    setTexts(texts);
    setIsTopicContentVisible(true);
  }

  function handleBackButtonPress() {
    setIsTopicContentVisible(false);
    setTitle('Dicionário');
  }

  function verifyTopicUnlocking(topic, userUnlockedTopics) {
    const isUnlocked = userUnlockedTopics.some(
      unlockedTopic => unlockedTopic.topic_id === topic.id
    );
    return { ...topic, isUnlocked };
  }

  async function addUserUnlockedTopic() {
    try {
      await api.addUserUnlockedTopic(topicId, loggedUser.id);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchTopics() {
    try {
      const topics = await api.getTopics();
      const userUnlockedTopics = await api.getUnlockedTopics(loggedUser.id);
      const verifiedTopics = topics.map(topic => verifyTopicUnlocking(topic, userUnlockedTopics));
      const hasNewUnlockedTopic = !verifiedTopics.find(topic => topic.id === topicId)?.isUnlocked;
      if (hasNewUnlockedTopic && topicId) {
        addUserUnlockedTopic();
        const verifiedTopicsWithNewUnlockedTopic = verifiedTopics.map(topic =>
          topic.id === topicId ? { ...topic, isUnlocked: true } : topic
        );
        setTopics(verifiedTopicsWithNewUnlockedTopic);
        return;
      }
      setTopics(verifiedTopics);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTopics();
  }, []);

  return (
    <Modal isVisible={isVisible} animationIn={'slideInUp'} animationOut={'bounceOut'}>
      <C.Content>
        <C.Header>
          <C.Title>{title}</C.Title>
          <C.Exit onPress={() => setIsVisible(false)}>
            <X color={theme.colors.red_700} />
          </C.Exit>
        </C.Header>

        {isTopicContentVisible ? (
          <>
            <C.Back onPress={handleBackButtonPress}>
              <ArrowLeft color={theme.colors.green_300} />
            </C.Back>
            <C.TextsContainer>
              <C.Texts
                data={texts}
                keyExtractor={(_, index) => `text-${index}`}
                renderItem={({ item: { type, title, body } }) => (
                  <Text type={type} title={title} body={body} isRendered={true} />
                )}
              />
            </C.TextsContainer>
          </>
        ) : (
          <C.TopicsList
            data={topics}
            keyExtractor={topic => topic.id}
            numColumns={2}
            renderItem={({ item: { title, texts, isUnlocked } }) => (
              <C.Topic
                onPress={() => isUnlocked && showTopicContent(title, texts)}
                isUnlocked={isUnlocked}
                activeOpacity={0.7}
              >
                <C.Icon>{!isUnlocked && <Lock color={theme.colors.gray_500} width={16} />}</C.Icon>
                <C.TopicTitle>{title}</C.TopicTitle>
              </C.Topic>
            )}
          />
        )}
      </C.Content>
    </Modal>
  );
}
