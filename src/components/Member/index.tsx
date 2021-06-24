import React from 'react'
import { Text, View } from 'react-native'
import { theme } from '../../global/theme'
import { Avatar } from '../Avatar'
import { Styles } from './styles'

export type MemberProps = {
	id: string
	username: string
	avatarUrl: string
	status: string
}

type Props = {
	data: MemberProps
}

export const Member = ({ data }: Props) => {
	const { on, primary } = theme.colors
	const { avatarUrl, username, status } = data

	const isOnline = status === 'online'

	return (
		<View style={Styles.container}>
			<Avatar
				urlImage={avatarUrl}
			/>
			<View>

				<Text style={Styles.title}>
					{username}
				</Text>

				<View style={Styles.status}>
					<View
						style={[Styles.bulletStatus, { backgroundColor: isOnline ? on : primary }]}
					/>
					<Text style={Styles.nameStatus}>
						{isOnline ? 'Disponivel' : 'Ocupado'}
					</Text>

				</View>

			</View>

		</View>
	)
}