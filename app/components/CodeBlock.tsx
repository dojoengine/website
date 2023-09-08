"use client"
import { CodeBlock, dracula } from "react-code-blocks";

const lang = `#[system]
mod spawn {
    use array::ArrayTrait;
    use box::BoxTrait;
    use traits::Into;
    use dojo::world::Context;

    use dojo_examples::components::Position;
    use dojo_examples::components::Moves;

    fn execute(ctx: Context) {
        let position = get !(ctx.world, ctx.origin, (Position));
        set !(
            ctx.world,
            (
                Moves {
                    player: ctx.origin, remaining: 10
                    }, 
                Position {
                    player: ctx.origin, x: position.x + 10, y: position.y + 10
                },
            )
        );
        return ();
    }
}
`
export const Code = () => {
    return <CodeBlock
        language={'rust'}
        text={lang}
        theme={dracula}
        customStyle={{
            height: '550px',
            fontSize: '0.75rem',
            backgroundColor: '#031125',
        }}
    />
}