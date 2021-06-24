import React from 'react'
import { FlatList, View } from 'react-native'
import { Guild, GuildProps } from '../Guild'
import { ListDivider } from '../ListDivider'
import { Styles } from './styles'

const guilds: GuildProps[] = [
    {
        id: '1',
        name: 'Lendários',
        icon: 'image.png',
        owner: true
    },
    {
        id: '2',
        name: 'Lendários',
        icon: 'image.png',
        owner: true
    }
]

type Props = {
    handleGuildSelect: (guild: GuildProps) => void
}

export const Guilds = ({ handleGuildSelect }: Props) => {
    return (
        <View style={Styles.container}>
            <FlatList
                data={guilds}
                style={Styles.guilds}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <ListDivider />}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Guild
                        data={item}
                        onPress={() => handleGuildSelect(item)}
                    />
                )}
            />
        </View>
    )
}