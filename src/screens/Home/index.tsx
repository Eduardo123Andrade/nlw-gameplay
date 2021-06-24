import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
import { View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { Appointment } from '../../components/Appointment'
import { Background } from '../../components/Background'
import { ButtonAdd } from '../../components/ButtonAdd'
import { CategorySelect } from '../../components/CategorySelect'
import { ListDivider } from '../../components/ListDivider'
import { ListHeader } from '../../components/ListHeader'
import { Profile } from '../../components/Profile'
import { Styles } from './styles'

const appointments = [
	{
		id: '1',
		guild: {
			id: '1',
			name: 'Lendários',
			icon: null,
			owner: true
		},
		category: '1',
		date: '22/06 às 20:40h',
		description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
	},
	{
		id: '2',
		guild: {
			id: '1',
			name: 'Lendários',
			icon: null,
			owner: true
		},
		category: '1',
		date: '22/06 às 20:40h',
		description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
	},
]


export const Home = () => {
	const [category, setCategory] = useState('')
	const navigation = useNavigation()

	const handleCategorySelect = (categoryId: string) => {
		categoryId === category ? setCategory('') : setCategory(categoryId)
	}

	const handleAppointmentDetails = () => {
		navigation.navigate('AppointmentDetails')
	}

	const handleAppointmentCreate = () => {
		navigation.navigate('AppointmentCreate')
	}

	return (
		<Background>
			<View style={Styles.container}>
				<View style={Styles.header}>
					<Profile />
					<ButtonAdd onPress={handleAppointmentCreate} />
				</View>

				<CategorySelect
					categorySelected={category}
					setCategory={handleCategorySelect}
				/>

				<ListHeader
					title="Partidas agendadas"
					subtitle="Total 6"
				/>
				<FlatList
					data={appointments}
					keyExtractor={item => item.id}
					style={Styles.matches}
					showsVerticalScrollIndicator={false}
					contentContainerStyle={{ paddingBottom: 69}}
					ItemSeparatorComponent={() => <ListDivider />}
					renderItem={({ item }) => (
						<Appointment
							data={item}
							onPress={handleAppointmentDetails}
						/>
					)}
				/>

			</View>
		</Background>
	)
}