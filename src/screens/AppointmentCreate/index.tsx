import React, { useState } from 'react'
import { Text, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import Feather from 'react-native-vector-icons/Feather'
import { Background } from '../../components/Background'
import { Button } from '../../components/Button'
import { CategorySelect } from '../../components/CategorySelect'
import { GuildProps } from '../../components/Guild'
import { Guilds } from '../Guilds'
import { Header } from '../../components/Header'
import { ModalView } from '../../components/ModalView'
import { SmallInput } from '../../components/SmallInput'
import { TextArea } from '../../components/TextArea'
import { theme } from '../../global/theme'
import { GuildIcon } from '../../components/GuildIcon'
import { Styles } from './styles'

const { colors } = theme

export const AppointmentCreate = () => {
	const [category, setCategory] = useState('')
	const [openGuildsModal, setOpenGuildsModal] = useState(false)
	const [guild, setGuild] = useState<GuildProps>({} as GuildProps)

	const handleOpenGuilds = () => setOpenGuildsModal(true)
	const handleCloseGuilds = () => setOpenGuildsModal(false)

	const handleCategorySelect = (categoryId: string) => {
		setCategory(categoryId)
	}


	const handleGuildSelect = (guildSelected: GuildProps) => {
		setGuild(guildSelected)
		setOpenGuildsModal(false)
	}

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={Styles.container}>
			<Background>
				<ScrollView>

					<Header
						title="Agendar Partida"
					/>
					<Text style={[Styles.label, Styles.category]}>
						Categoria
					</Text>

					<CategorySelect
						hasCheckBox
						setCategory={handleCategorySelect}
						categorySelected={category}
					/>

					<View style={Styles.form}>
						<RectButton onPress={handleOpenGuilds}>
							<View style={Styles.select}>

								{guild.icon ?
									<GuildIcon /> :
									<View style={Styles.image} />
								}

								<View style={Styles.selectBody}>
									<Text style={Styles.label}>
										{guild.name ? guild.name : 'Selecione um servidor'}
									</Text>
								</View>
								<View>
									<Feather
										name="chevron-right"
										color={colors.heading}
										size={18}
									/>

								</View>

							</View>
						</RectButton>

						<View style={Styles.field}>
							<View>
								<Text style={[Styles.label, { marginBottom: 12 }]}>
									Dia e mês
								</Text>
								<View style={Styles.column}>
									<SmallInput maxLength={2} />
									<Text style={Styles.divider}>/</Text>
									<SmallInput maxLength={2} />
								</View>
							</View>

							<View>
								<Text style={[Styles.label, { marginBottom: 12 }]}>
									Hora e minuto
								</Text>
								<View style={Styles.column}>
									<SmallInput maxLength={2} />
									<Text style={Styles.divider}>:</Text>
									<SmallInput maxLength={2} />
								</View>
							</View>

						</View>

						<View style={[Styles.field, { marginBottom: 12 }]}>
							<Text style={Styles.label}>
								Descrição
							</Text>

							<Text style={Styles.charactersLimit}>
								Max 100 caracteres
							</Text>
						</View>

						<TextArea
							multiline
							maxLength={100}
							numberOfLines={5}
						/>
						<View style={Styles.footer}>
							<Button title="Agendar" />
						</View>
					</View>

				</ScrollView>
			</Background>

			<ModalView visible={openGuildsModal} closeModal={handleCloseGuilds}>
				<Guilds handleGuildSelect={handleGuildSelect} />
			</ModalView>

		</KeyboardAvoidingView >
	)
}