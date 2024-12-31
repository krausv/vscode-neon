const vscode = require('vscode');

function activate(context) {
    console.log('Neon syntax highlighting activated!');

    vscode.workspace.onDidOpenTextDocument((document) => {
        if (document.languageId === 'neon') {
            console.log('Otevřen .neon soubor');
        }
    });

    vscode.window.onDidChangeActiveTextEditor((editor) => {
        if (editor && editor.document.languageId === 'neon') {
            console.log('Aktivován .neon soubor');
        }
    });
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
