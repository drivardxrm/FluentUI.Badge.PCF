import { Badge, FluentProvider, makeStyles, teamsDarkTheme, teamsHighContrastTheme, teamsLightTheme, Theme, webDarkTheme, webLightTheme } from '@fluentui/react-components'
import * as React from 'react'

export interface IFluentUIBadgeProps {

    input: string | undefined;
    separator: string | undefined
    appearance: "filled" | "ghost" | "outline" | "tint"
    shape: "circular" | "rounded" | "square"
    color: "brand" | "danger" | "important" | "informative" | "severe" | "subtle" | "success" | "warning"
    size: "small" | "medium" | "large" | "extra-large"
    theme: "WebLight" | "WebDark" | "TeamsLight" | "TeamsDark" | "TeamsHighContrast"
 }


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

const FluentUIBadgeApp = (props:IFluentUIBadgeProps): JSX.Element => {
    
    const activetheme: Theme = themes[props.theme];

    const classes = useStyles();
    const getInputs = ():string[] =>{
        let inputs:string[] = []
        if(props.input != undefined){

            if(props.separator != undefined &&
                props.separator != ''){
                (props.input)?.split(props.separator).forEach(x => inputs.push(x))
            }else{
                inputs.push(props.input)
            }
        }
        return inputs
    }

    return (
        
        <FluentProvider theme={activetheme}>
            {getInputs().map((input,index) => 
                <Badge
                    key={`badge-${index}.`}
                    className={classes.badge}
                    appearance={props.appearance} 
                    size={props.size} 
                    shape={props.shape} 
                    color={props.color}
                >
                    {input}
                </Badge>
            )}   
        </FluentProvider>
        
    )
}

export default FluentUIBadgeApp
