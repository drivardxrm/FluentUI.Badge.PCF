import { Badge, FluentProvider, makeStyles, webLightTheme } from '@fluentui/react-components'
import * as React from 'react'
import { IInputs } from './generated/ManifestTypes'

const useStyles = makeStyles({
    badge: { 
        marginLeft: '5px'
    } 
});


const FluentUIBadgeApp = (context:ComponentFramework.Context<IInputs>): JSX.Element => {
    
    const classes = useStyles();
    const getInputs = ():string[] =>{
        let inputs:string[] = []

        switch (context.parameters.input.type) {
            case "MultiSelectOptionSet":
                (context.parameters.input.formatted)?.split(";").forEach(x => inputs.push(x))
                break;
            default:
                inputs.push(context.parameters.input.formatted ?? context.parameters.input.raw)
                break;
        }
        return inputs
    } 
    const appearance = context.parameters.appearance.raw ?? 'filled'
    const size = context.parameters.size.raw ?? 'medium'
    const shape = context.parameters.shape.raw ?? 'circular'
    const color = context.parameters.color.raw ?? 'brand'
    
    return (
        <FluentProvider theme={webLightTheme}>
            {getInputs().map((input) => 
                <Badge
                    className={classes.badge}
                    appearance={appearance} 
                    size={size} 
                    shape={shape} 
                    color={color}>
                        {input}
                </Badge>
            )}   
        </FluentProvider>
    )
}

export default FluentUIBadgeApp
