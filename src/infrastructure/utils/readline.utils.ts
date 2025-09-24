import readline from 'readline';

export function readLine(prompt: string = ''): Promise<string> {
    const nodeReadline = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: true,
    });

    return new Promise((resolve) => {
        nodeReadline.question(prompt, (answer) => {
            nodeReadline.close();
            resolve(answer);
        });
    });
}