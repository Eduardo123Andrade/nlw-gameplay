import React from 'react'
import { ScrollView } from 'react-native'
import { categories } from '../../utils/categories'
import { Category } from '../Category'
import { Styles } from './styles'


type Props = {
	categorySelected: string
	setCategory: (categoryId: string) => void,
	hasCheckBox?: boolean
}

export const CategorySelect = ({
	categorySelected,
	setCategory,
	hasCheckBox = false
}: Props) => {
	return (
		<ScrollView
			horizontal
			style={Styles.container}
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={{ paddingRight: 40 }}>
			{
				categories.map(category => (
					<Category
						hasCheckBox={hasCheckBox}
						key={category.id}
						title={category.tittle}
						icon={category.icon}
						checked={category.id === categorySelected}
						onPress={() => setCategory(category.id)}
					/>
				))
			}

		</ScrollView >
	)
}