import React from 'react'
import { StyledConsole } from "../styles/styles";
import {Flex} from './Flex'
import {Line} from './Line'


export const Console = ({color, ...props}) => {
    const [lines, setLines] = React.useState(['C/Users/Virus>'])

    const onKeyPress = e => {
        if (e.charCode == 13) {
            setLines([...lines, 'C/Users/Virus>'])
        }
    }

    return (
        <Flex>
            <Flex direction="column" margin="0 10px">
                {lines.map(line => 
                    <Line color={color}>{line}</Line>    
                )}
            </Flex>
            <StyledConsole onKeyPress={onKeyPress} color={color} {...props}/>
        </Flex>
    )
}