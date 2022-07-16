
// eslint-disable-next-line no-use-before-define
import { Badge, FluentProvider, teamsDarkTheme, teamsHighContrastTheme, teamsLightTheme, webDarkTheme, webLightTheme } from '@fluentui/react-components'
import * as React from 'react'
import { IInputs } from './generated/ManifestTypes'

// eslint-disable-next-line no-undef
const FluentUIBadgeApp = (context:ComponentFramework.Context<IInputs>): JSX.Element => {
    const message = context.parameters.message.formatted ?? context.parameters.message.raw
    const appearance = context.parameters.appearance.raw ?? 'filled'
    const size = context.parameters.size.raw ?? 'medium'
    const shape = context.parameters.shape.raw ?? 'circular'
    const color = context.parameters.color.raw ?? 'brand'
    const theme = context.parameters.theme.raw ?? 'webLightTheme'
    // const redirecturl = context.parameters.url.raw
    
    return (
    <>
        { theme == 'webLightTheme' && 
            <FluentProvider theme={webLightTheme}>
                <Badge appearance={appearance} size={size} shape={shape} color={color}>{message}</Badge>
            </FluentProvider>
        }
        { theme == 'webDarkTheme' && 
            <FluentProvider theme={webDarkTheme}>
                <Badge appearance={appearance} size={size} shape={shape} color={color}>{message}</Badge>
            </FluentProvider>
        }
        { theme == 'teamsDarkTheme' && 
            <FluentProvider theme={teamsDarkTheme}>
                <Badge appearance={appearance} size={size} shape={shape} color={color}>{message}</Badge>
            </FluentProvider>
        }
        { theme == 'teamsHighContrastTheme' && 
            <FluentProvider theme={teamsHighContrastTheme}>
                <Badge appearance={appearance} size={size} shape={shape} color={color}>{message}</Badge>
            </FluentProvider>
        }
        { theme == 'teamsLightTheme' && 
            <FluentProvider theme={teamsLightTheme}>
                <Badge appearance={appearance} size={size} shape={shape} color={color}>{message}</Badge>
            </FluentProvider>
        }

    </>
        
    )
}

export default FluentUIBadgeApp
