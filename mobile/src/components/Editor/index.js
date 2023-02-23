import CodeEditor, { CodeEditorSyntaxStyles } from '@rivascva/react-native-code-editor';

export function Editor({ value, isReadOnly = true, onChange = null }) {
  return (
    <CodeEditor
      style={{
        fontSize: 12,
        inputLineHeight: 26,
        highlighterLineHeight: 26,
      }}
      language={'apache'}
      showLineNumbers
      autoFocus={false}
      onChange={onChange}
      initialValue={value}
      readOnly={isReadOnly}
      syntaxStyle={CodeEditorSyntaxStyles.a11yDark}
    />
  );
}
