import CodeEditor, { CodeEditorSyntaxStyles } from '@rivascva/react-native-code-editor';
import { useEditor } from '../../hooks/useEditor';

export function Editor({ value, isReadOnly = true, onChange = null }) {
  const { fontSize, isDarkMode } = useEditor();
  const theme = isDarkMode ? 'stackoverflowDark' : 'stackoverflowLight';
  
  return (
    <CodeEditor
      style={{
        fontSize: fontSize,
        inputLineHeight: 26,
        highlighterLineHeight: 26,
      }}
      language={theme}
      showLineNumbers
      autoFocus={false}
      onChange={onChange}
      initialValue={value}
      readOnly={isReadOnly}
      syntaxStyle={CodeEditorSyntaxStyles[theme]}
    />
  );
}
