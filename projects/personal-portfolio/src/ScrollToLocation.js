
function ScrollToLocation(props) {
    const { x, y } = props;
    window.scrollTo(x, y)
    return props.children;
}

export default ScrollToLocation
