import { Badge, FluentProvider, makeStyles, teamsDarkTheme, teamsHighContrastTheme, teamsLightTheme, Theme, webDarkTheme, webLightTheme } from '@fluentui/react-components'
import * as React from 'react'
import { IInputs } from './generated/ManifestTypes'

const useStyles = makeStyles({
    badge: { 
        marginLeft: '5px'
    } 
});

const themes: Record<string, Theme> = {
    "TeamsLight": teamsLightTheme,
    "TeamsDark": teamsDarkTheme,
    "TeamsHighContrast": teamsHighContrastTheme,
    "WebLight": webLightTheme,
    "WebDark": webDarkTheme,
};

const FluentUIBadgeApp = (context:ComponentFramework.Context<IInputs>): JSX.Element => {
    
    const activetheme: Theme = themes[context.parameters.theme.raw ?? 'WebLight'];

    const classes = useStyles();
    const getInputs = ():string[] =>{
        let inputs:string[] = []
        if(context.parameters.input.raw != null && 
            context.parameters.input.raw != undefined){

            if(context.parameters.separator.raw != null &&
                context.parameters.separator.raw != undefined &&
                context.parameters.separator.raw != ''){
                (context.parameters.input.formatted)?.split(context.parameters.separator.raw).forEach(x => inputs.push(x))
            }else{
                inputs.push(context.parameters.input.formatted ?? context.parameters.input.raw)
            }
        }
        return inputs
    }

        
    const appearance = context.parameters.appearance.raw ?? 'filled'
    const size = context.parameters.size.raw ?? 'medium'
    const shape = context.parameters.shape.raw ?? 'circular'
    const color = context.parameters.color.raw ?? 'brand'

    return (
        
        <FluentProvider theme={activetheme}>
            {getInputs().map((input,index) => 
                <Badge
                    key={`badge-${index}.`}
                    className={classes.badge}
                    appearance={appearance} 
                    size={size} 
                    shape={shape} 
                    color={color}
                >
                    {input}
                </Badge>
            )}   
        </FluentProvider>
        
    )
}

export default FluentUIBadgeApp
