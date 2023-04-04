import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Modal } from '../Modal';
import { Loading } from '../Loading';
import * as C from './styles';
import api from '../../services/api';

export function Dictionary({ isVisible }) {
  const { loggedUser } = useAuth([]);
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function isTopicUnlocked(topic) {
    const isUnlocked = loggedUser.unlocked_topics.includes(topic);
    return { ...topic, isUnlocked };
  }

  async function fetchTopics() {
    try {
      const topics = await api.getTopics();
      const verifiedTopics = topics.map(isTopicUnlocked);
      setTopics(verifiedTopics);
      console.log({ verifiedTopics });
    } catch (error) {
      console.log(error);
    } finally {
      isLoading;
    }
  }

  useEffect(() => {
    setIsLoading(true);
    fetchTopics();
  }, []);

  return (
    <Modal isVisible={isVisible} animationIn={'slideInUp'} animationOut={'bounceOut'}>
      {isLoading && !topics.length ? (
        <Loading />
      ) : (
        <C.Content>
          <C.TopicsList data={topics} />
        </C.Content>
      )}
    </Modal>
  );
}
