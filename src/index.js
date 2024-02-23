function main(nodes) {
    const styles = [];
    let increment = 0;
    let wholeString = "";

    for (const node of nodes) {
        if (!node.text) {
            continue
        }

        const endRange = node.text.length - 1 + increment;

        if ("style" in node) {
            const style = {style: node.style, range: `${increment}-${endRange}`}
            styles.push(style)
        }

        increment += node.text.length 
        wholeString += node.text
    }

    return {
        id: "a",
        text: wholeString,
        styling: styles
    };
}