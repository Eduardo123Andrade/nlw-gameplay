import React from 'react'
import { Text, View } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import { SvgProps } from 'react-native-svg'
import { theme } from '../../global/theme'
import { Styles } from './styles'

const { secondary40, secondary50, secondary70, secondary85 } = theme.colors

type Props = RectButtonProps & {
	title: string,
	icon: React.FC<SvgProps>
	hasCheckBox?: boolean
	checked?: boolean
}

export const Category = ({
	title,
	icon: Icon,
	checked = false,
	hasCheckBox = false,
	...rest
}: Props) => {
	return (
		<RectButton {...rest}>
			<LinearGradient
				style={Styles.container}
				colors={[secondary50, secondary70]}
			>
				<LinearGradient
					style={[Styles.content, { opacity: checked ? 1 : 0.5 }]}
					colors={[checked ? secondary85 : secondary50, secondary40]}
				>
					{
						hasCheckBox &&
						<View style={
							checked ? Styles.checked : Styles.check
						} />
					}

					<Icon
						width={48}
						height={48}
					/>

					<Text style={Styles.title}>
						{title}
					</Text>
				</LinearGradient>
			</LinearGradient>
		</RectButton>
	)
}