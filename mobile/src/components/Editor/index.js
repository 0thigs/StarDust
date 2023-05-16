import CodeEditor, { CodeEditorSyntaxStyles } from '@rivascva/react-native-code-editor';
import { useRef } from 'react';
import { useEditor } from '../../hooks/useEditor';

export function Editor({ value, isReadOnly = true, onChange = null }) {
  const { fontSize, isDarkMode } = useEditor();
  const theme = isDarkMode ? 'tomorrowNightBright' : 'stackoverflowLight';
  const editoRef = useRef(null);
//tomorrowNightBright
  return (
    <CodeEditor
      ref={editoRef}
      style={{
        fontSize: fontSize,
        inputLineHeight: 20,
        highlighterLineHeight: 20,
      }}
      language={'javascript'}
      showLineNumbers
      autoFocus={false}
      onChange={onChange}
      initialValue={value}
      readOnly={isReadOnly}
      syntaxStyle={CodeEditorSyntaxStyles[theme]}
    />
  );
}
