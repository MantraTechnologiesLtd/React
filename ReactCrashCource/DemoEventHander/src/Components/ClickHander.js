export const ClickEventHander = () => {
    const clickHanderBasic = (event) => {
        console.log("Button Clicked!");
    }

    const clickHanderWithEvent = (event) => {
        console.log("Button Clicked with event!", event);
    }

    const clickHanderWithArguments = (event, count) => {
        console.log("Button Clicked argument!", count, event);
    }

    return (
        <div>
            <button onClick={clickHanderBasic}>Click for Simple Click event</button>
            <button onClick={clickHanderWithEvent}>Click for Passing event</button>
            <button onClick={(event) => clickHanderWithArguments(event, 5)}>Click for Passing argument</button>
        </div>
    );

}