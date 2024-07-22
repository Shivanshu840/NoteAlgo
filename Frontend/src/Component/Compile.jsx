import React, { useState } from 'react';

const Compiler = () => {
    const [code, setCode] = useState('');
    const [output, setOutput] = useState('');
    const [language, setLanguage] = useState('python3');
    const [input, setInput] = useState('');

    const compileCode = async () => {
        const response = await fetch('http://localhost:3000/compile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ code, language, input })
        });

        const result = await response.json();
        setOutput(result.output);
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="languageSelect">Choose Language</label>
                        <select
                            id="languageSelect"
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                            className="form-control mb-3"
                        >
                            <option value="python3">Python</option>
                            <option value="javascript">JavaScript</option>
                            <option value="java">Java</option>
                            <option value="c_cpp">C/C++</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="codeTextarea">Code</label>
                        <textarea
                            id="codeTextarea"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            rows="10"
                            className="form-control"
                            placeholder="Enter your code here"
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputText">Input</label>
                        <input
                            id="inputText"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="form-control"
                            placeholder="Enter input for your code"
                        />
                    </div>
                    <button onClick={compileCode} className="btn btn-primary btn-block mt-3">Run</button>
                </div>
                <div className="col-md-6">
                    <h3>Output</h3>
                    <pre className="p-3 bg-light border rounded" style={{ height: '100%', overflow: 'auto' }}>{output}</pre>
                </div>
            </div>
        </div>
    );
};

export default Compiler;
