import logo from './logo.svg';
import './App.css';
import 'froala-editor/js/froala_editor.pkgd.min.js';

// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

// Require Font Awesome.
//import 'font-awesome/css/font-awesome.css';

import FroalaEditor from 'react-froala-wysiwyg';


let config={
  placeholderText: 'Edit Your Content Here!',
  charCounterCount: false
}

function App() {
  return (
    <div className="App">
      <FroalaEditor
        tag='textarea'
        config={config}
      />
    </div>
  );
}

export default App;
