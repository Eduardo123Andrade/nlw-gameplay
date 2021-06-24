import React from 'react'
import { View, Text } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { categories } from '../../utils/categories'
import { GuildIcon } from '../../screens/GuildIcon'
import { Styles } from './styles'

import PlayerSvg from '../../assets/player.svg'
import CalendarSvg from '../../assets/calendar.svg'
import { theme } from '../../global/theme'


export type GuildProps = {
	id: string;
	name: string;
	icon: null,
	owner: boolean;
}

export type AppointmentProps = {
	id: string;
	guild: GuildProps;
	category: string;
	date: string;
	description: string;
}

type Props = RectButtonProps & {
	data: AppointmentProps;
}

export const Appointment = ({ data, ...rest }: Props) => {
	const { guild, category: categoryId, date } = data
	const { owner } = guild
	const category = categories.find(item => item.id === categoryId)
	const { primary, on } = theme.colors

	return (
		<RectButton {...rest}>
			<View style={Styles.container}>
				<GuildIcon />

				<View style={Styles.content}>
					<View style={Styles.header}>
						<Text style={Styles.title}>
							{guild.name}
						</Text>

						<Text style={Styles.category}>
							{category?.tittle}
						</Text>
					</View>

					<View style={Styles.footer}>
						<View style={Styles.dateInfo}>
							<CalendarSvg />

							<Text style={Styles.date}>
								{date}
							</Text>

						</View>

						<View style={Styles.playersInfo}>
							<PlayerSvg fill={owner ? primary : on} />
							<Text style={[
								Styles.player,
								{ color: owner ? primary : on }
							]} >
								{owner ? 'Anfitrião' : 'Visitante'}
							</Text>
						</View>
					</View>

				</View>
			</View>
		</RectButton>
	)
}