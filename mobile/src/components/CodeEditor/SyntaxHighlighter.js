import React from 'react';
import { View, ScrollView, Text, Platform, ColorValue, TextStyle } from 'react-native';
import Highlighter, { SyntaxHighlighterProps as HighlighterProps } from 'react-syntax-highlighter';
import * as HLJSSyntaxStyles from 'react-syntax-highlighter/dist/esm/styles/hljs';

export const SyntaxHighlighterSyntaxStyles = HLJSSyntaxStyles;

const SyntaxHighlighter = props => {
  const {
    syntaxStyle = SyntaxHighlighterSyntaxStyles.atomOneDark,
    addedStyle,
    scrollEnabled,
    showLineNumbers = false,
    forwardedRef,
    testID,
    ...highlighterProps
  } = props;

  // Valores padrões
  const {
    fontFamily = Platform.OS === 'ios' ? 'Menlo-Regular' : 'monospace',
    fontSize = 16,
    backgroundColor = undefined,
    padding = 16,
    lineNumbersColor = 'rgba(127, 127, 127, 0.9)',
    lineNumbersBackgroundColor = undefined,
    highlighterLineHeight = undefined,
    highlighterColor = undefined,
  } = addedStyle || {};

  // Only when line numbers are showing
  const lineNumbersPadding = showLineNumbers ? 1.75 * fontSize : undefined;
  const lineNumbersFontSize = 0.7 * fontSize;

  // Evita que a última linha seja cortada durante a rolagem do scroll
  highlighterProps.children += '\n\n';

  const cleanStyle = style => {
    const clean = {
      ...style,
      display: undefined,
    };
    return clean;
  };

  const stylesheet = Object.fromEntries(
    Object.entries(syntaxStyle).map(([className, style]) => [className, cleanStyle(style)])
  );

  const renderLineNumbersBackground = () => (
    <View
      style={{
        position: 'absolute',
        top: -padding,
        left: 0,
        bottom: 0,
        width: lineNumbersPadding ? lineNumbersPadding - 5 : 0,
        backgroundColor: lineNumbersBackgroundColor,
      }}
    />
  );

  const renderNode = (nodes, key = '0') =>
    nodes.reduce((acc, node, index) => {
      if (node.children) {
        const textElement = (
          <Text
            key={`${key}.${index}`}
            style={[
              {
                color: highlighterColor || stylesheet.hljs.color,
              },
              ...(node.properties?.className || []).map(c => stylesheet[c]),
              {
                lineHeight: highlighterLineHeight,
                fontFamily,
                fontSize,
                paddingLeft: lineNumbersPadding ?? padding,
              },
            ]}
          >
            {renderNode(node.children, `${key}.${index}`)}
          </Text>
        );

        const lineNumberElement =
          key !== '0' || index >= nodes.length - 2 ? undefined : (
            <Text
              key={`$line.${index}`}
              style={{
                position: 'absolute',
                top: 5,
                bottom: 0,
                paddingHorizontal: nodes.length - 2 < 100 ? 5 : 0,
                textAlign: 'center',
                color: lineNumbersColor,
                fontFamily,
                fontSize: lineNumbersFontSize,
                width: lineNumbersPadding ? lineNumbersPadding - 5 : 0,
              }}
            >
              {index + 1}
            </Text>
          );

        acc.push(
          showLineNumbers && lineNumberElement ? (
            <View key={`view.line.${index}`}>
              {lineNumberElement}
              {textElement}
            </View>
          ) : (
            textElement
          )
        );
      }

      if (node.value) {
        // Previne uma linha vazia depois de cada sring
        node.value = node.value.replace('\n', '');
        // Renderiza linhas em branco com uma altura de fonte igual
        node.value = node.value.length ? node.value : ' ';
        acc.push(node.value);
      }

      return acc;
    }, []);

  const nativeRenderer = ({ rows }) => {
    return (
      <ScrollView
        style={[
          stylesheet.hljs,
          {
            width: '100%',
            height: '100%',
            backgroundColor: backgroundColor || stylesheet.hljs.background,
            // Previne o YGValue error
            padding: 0,
            paddingTop: padding,
            paddingRight: padding,
            paddingBottom: padding,
          },
        ]}
        testID={`${testID}-scroll-view`}
        ref={forwardedRef}
        scrollEnabled={scrollEnabled}
      >
        {showLineNumbers && renderLineNumbersBackground()}
        {renderNode(rows)}
      </ScrollView>
    );
  };

  return (
    <Highlighter
      {...highlighterProps}
      customStyle={{
        padding: 0,
      }}
      CodeTag={View}
      PreTag={View}
      renderer={nativeRenderer}
      testID={testID}
      style={stylesheet}
    />
  );
};

const SyntaxHighlighterWithForwardRef = React.forwardRef((props, ref) => (
  <SyntaxHighlighter {...props} forwardedRef={ref} />
));

export default SyntaxHighlighterWithForwardRef;
