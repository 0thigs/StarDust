import CodeEditor, { CodeEditorSyntaxStyles } from '@rivascva/react-native-code-editor';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useEditor } from '../../hooks/useEditor';

export function Editor({ value, isReadOnly = true, onChange = null }) {
  const { fontSize, isDarkMode } = useEditor();
  const theme = isDarkMode ? 'apache' : 'stackoverflowLight';
  const editoRef = useRef(null);

  useEffect(() => {
        console.log(editoRef?.current);
   
  }, [value])
  

  return (
    <CodeEditor
      ref={editoRef}
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
