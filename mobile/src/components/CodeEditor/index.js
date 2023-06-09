import React, { useRef, useState, useEffect, useImperativeHandle } from 'react';
import { View, StyleSheet, TextInput, Platform } from 'react-native';
import * as Braces from './braces';

import * as Indentation from './indentation.js';
import * as Strings from './strings';
import SyntaxHighlighter, {
  SyntaxHighlighterSyntaxStyles,
} from '@rivascva/react-native-code-editor/src/SyntaxHighlighter';

export const CodeEditorSyntaxStyles = SyntaxHighlighterSyntaxStyles;

export function CodeEditor(props) {
  const {
    style,
    language,
    syntaxStyle = CodeEditorSyntaxStyles.atomOneDark,
    initialValue = '',
    onChange,
    onSelectionChange,
    onKeyPress,
    showLineNumbers = false,
    readOnly = false,
    autoFocus = true,
    testID,
    forwardedRef,
  } = props;

  const {
    width = undefined,
    height = undefined,
    marginTop = undefined,
    marginBottom = undefined,
    inputLineHeight = undefined,
    currentValue,
    inputColor = 'rgba(0,0,0,0)',
    ...addedStyle
  } = style || {};

  const {
    fontFamily = Platform.OS === 'ios' ? 'Menlo-Regular' : 'monospace',
    fontSize = 16,
    padding = 16,
  } = addedStyle;

  const [value, setValue] = useState(initialValue);
  const highlighterRef = useRef(null);
  const inputRef = useRef(null);
  const inputSelection = useRef({ start: 0, end: 0 });

  // Apenas quando os números de linhas estão visiveis
  const lineNumbersPadding = showLineNumbers ? 1.75 * fontSize : undefined;

  // Sincroniza o forwardedRef com o inputRef
  useImperativeHandle(
    forwardedRef,
    () => {
      return { textInput: inputRef.current, setValue, moveCursor };
    },
    [inputRef]
  );

  useEffect(() => {
    if (onChange) {
      onChange(value);
    }
  }, [onChange, value]);

  // Valores negativos movem o cursor para a esquerda
  const moveCursor = (current, amount) => {
    const newPosition = current + amount;
    inputRef.current?.setNativeProps({
      selection: {
        start: newPosition,
        end: newPosition,
      },
    });

    if (Platform.OS === 'android') {
      setTimeout(() => {
        inputRef.current?.setNativeProps({ selection: { start: 0 } });
      }, 10);
    }
    return newPosition;
  };

  const addIndentation = value => {
    let cursorPosition = inputSelection.current.start - 1;

    // todas linhas antes do cursor
    const preLines = value.substring(0, cursorPosition).split('\n');
    const indentSize = Indentation.getSuggestedIndentSize(preLines);
    let indentation = Indentation.createIndentString(indentSize);

    // Adiciona uma nova linha e identação em uma síbulo de agrupamento regular
    const leftChar = value[cursorPosition - 1] || '';
    const rightChar = value[cursorPosition + 1] || '';
    if (Braces.isBracePair(leftChar, rightChar)) {
      let addedIndentionSize = Braces.isRegularBrace(leftChar)
        ? Math.max(indentSize - Indentation.INDENT_SIZE, 0)
        : indentSize;
      indentation += '\n' + Indentation.createIndentString(addedIndentionSize);
      // não atualize a posição do cursor local para inserir todas as novas mudanças em uma chamada de adição
      //   moveCursor(cursorPosition, -addedIndentionSize);
    }
    moveCursor(cursorPosition, indentSize + 1)
    return Strings.insertStringAt(value, cursorPosition + 1, indentation);
  };

  const addClosingBrace = (val, key) => {
    let cursorPosition = inputSelection.current.start;
    cursorPosition = moveCursor(cursorPosition, 0);
    return Strings.insertStringAt(val, cursorPosition, Braces.getCloseBrace(key));
  };

  const handleChangeText = text => {
    setValue(Strings.convertTabsToSpaces(text));
    
  };

  const handleScroll = e => {
    // Confere se o scroll do input de texto é igual o scroll do syntax highlighter
    const y = e.nativeEvent.contentOffset.y;
    highlighterRef.current?.scrollTo({ y, animated: false });
  };

  const handleKeyPress = e => {
    const key = e.nativeEvent.key;
    switch (key) {
      case 'Enter':
        setTimeout(() => {
          setValue(curr => addIndentation(curr));
        }, 10);
        break;
      default:
        if (Braces.isOpenBrace(key)) {
          setTimeout(() => {
            setValue(curr => addClosingBrace(curr, key));
            addClosingBrace(value, key);
          }, 10);
        }
        break;
    }
    if (onKeyPress) {
      onKeyPress(key);
    }
  };

  const handleSelectionChange = e => {
    inputSelection.current = e.nativeEvent.selection;

    if (onSelectionChange) {
      onSelectionChange(inputSelection.current);
    }
  };

  return (
    <View style={{ width, height, marginTop, marginBottom }} testID={testID}>
      <SyntaxHighlighter
        language={language}
        addedStyle={addedStyle}
        syntaxStyle={syntaxStyle}
        scrollEnabled={false}
        showLineNumbers={showLineNumbers}
        testID={`${testID}-syntax-highlighter`}
        ref={highlighterRef}
      >
        {value}
      </SyntaxHighlighter>
      <TextInput
        style={[
          styles.input,
          {
            lineHeight: inputLineHeight,
            color: inputColor,
            fontFamily: fontFamily,
            fontSize: fontSize,
            padding,
            paddingTop: padding,
            paddingLeft: lineNumbersPadding,
          },
        ]}
        value={value}
        onChangeText={handleChangeText}
        onScroll={handleScroll}
        onKeyPress={handleKeyPress}
        onFocus={handleSelectionChange}
        onBlur={handleSelectionChange}
        onSelectionChange={handleSelectionChange}
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect={false}
        autoFocus={autoFocus}
        keyboardType="ascii-capable"
        editable={!readOnly}
        testID={`${testID}-text-input`}
        ref={inputRef}
        multiline
      />
    </View>
  );
}

const CodeEditorWithForwardRef = React.forwardRef((props, ref) => (
  <CodeEditor {...props} forwardedRef={ref} />
));

export default CodeEditorWithForwardRef;

const styles = StyleSheet.create({
  input: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    textAlignVertical: 'top',
  },
});
