import React from 'react'
import { FlatList, ImageBackground, Text, View } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import Fontisto from 'react-native-vector-icons/Fontisto'
import BannerImg from '../../assets/banner.png'
import { Background } from '../../components/Background'
import { ButtonIcon } from '../../components/ButtonIcon'
import { Header } from '../../components/Header'
import { ListDivider } from '../../components/ListDivider'
import { ListHeader } from '../../components/ListHeader'
import { Member, MemberProps } from '../../components/Member'
import { theme } from '../../global/theme'
import { Styles } from './styles'


const members: MemberProps[] = [
	{
		id: '1',
		username: 'Eduardo',
		avatarUrl: 'https://cdn.dribbble.com/users/1061278/screenshots/12883393/media/5e6add0ca5e1b612cd4b7d404b857026.png?compress=1&resize=400x300',
		status: 'online'
	},
	{
		id: '2',
		username: 'Eduardo',
		avatarUrl: 'https://cdn.dribbble.com/users/1061278/screenshots/12883393/media/5e6add0ca5e1b612cd4b7d404b857026.png?compress=1&resize=400x300',
		status: 'offline'
	}
]

export const AppointmentDetails = () => {

	const renderIcon = () => (
		<BorderlessButton>
			<Fontisto
				name="share"
				size={24}
				color={theme.colors.primary}
			/>
		</BorderlessButton>
	)

	return (
		<Background>
			<Header
				title="Detalhes"
				action={renderIcon()}
			/>

			<ImageBackground
				style={Styles.banner}
				source={BannerImg}
			>
				<View style={Styles.bannerContent}>
					<Text style={Styles.title}>
						Lendários
					</Text>

					<Text style={Styles.subtitle}>
						É hoje que vamos chegar ao challenger sem perder uma partida da md10
					</Text>
				</View>
			</ImageBackground>

			<ListHeader
				title="Jogadores"
				subtitle="Total 3"
			/>

			<FlatList
				data={members}
				keyExtractor={item => item.id}
				style={Styles.members}
				ItemSeparatorComponent={() => <ListDivider />}
				renderItem={({ item }) =>
					<Member data={item} />
				}
			/>

			<View style={Styles.footer}>
				<ButtonIcon title="Entrar na partida" />
			</View>

		</Background>
	)
}