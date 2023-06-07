import CodeEditor, { CodeEditorSyntaxStyles } from '../CodeEditor';
import { useEditor } from '../../hooks/useEditor';

export function Editor({ value, isReadOnly = true, onChange = null }) {
  const { fontSize, isDarkMode } = useEditor();
  const theme = isDarkMode ? 'tomorrowNightBright' : 'stackoverflowLight';
  return (
    <CodeEditor
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
