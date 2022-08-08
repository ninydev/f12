import {useEffect, useState} from "react";
import {config, animated, useTransition} from "react-spring";

const NUM_TRANS= [
    {num:1, opacity:'1', trans:''},
    {num:2, opacity:'3', trans:''},
    {num:3, opacity:'6', trans:''},
    {num:4, opacity:'1', trans:''},
];

export default function TransitionArray() {
    const [items, setItems] = useState(NUM_TRANS)

    const transitions = useTransition(items, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        delay: 200,
        config: config.molasses,
        onRest: () => setItems([]),
    })

    useEffect(() => {
        if (items.length === 0) {
            setTimeout(() => {
                setItems(NUM_TRANS)
            }, 2000)
        }
    }, [items])

    return (
        <div style={{ display: 'flex' }}>
            {transitions(({ opacity }, item) => (

                <animated.div
                    style={{
                        // opacity: opacity.to(item.opacity),
                        transform: opacity
                             // .to(item['trans'])
                             .to(y => `translate3d(0,${y}px,0)`),
                    }}>
                    { console.log(item.opacity) }
                    {item.num}
                </animated.div>
            ))}
        </div>
    )
}