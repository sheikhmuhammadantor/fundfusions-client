import { Tooltip as ReactTooltip } from "react-tooltip";
// import "./styles.css";

export default function App() {
    return (
        <>
            <div className="App">
                <h1 data-tooltip-id="my-tooltip-1" style={{ backgroundColor: "#999" }}>
                    Hello Tooltip Example
                </h1>
                <h2 data-tooltip-id="my-tooltip-2" style={{ backgroundColor: "#999" }}>
                    This is a basic example on how to use ReactTooltip
                </h2>
            </div>
            <ReactTooltip
                id="my-tooltip-1"
                place="bottom"
                content="Hello world! I'm a Tooltip"
            />
            <ReactTooltip
                id="my-tooltip-2"
                place="bottom"
                variant="info"
                content="I'm a info tooltip"
            />
        </>
    );
}
