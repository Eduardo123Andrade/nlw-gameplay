import React from 'react'
import { Text, View } from 'react-native'
import { Avatar } from '../Avatar'
import { Styles } from './styles'

export const Profile = () => {
   return (
      <View style={Styles.container}>

         <Avatar urlImage="https://cdn.iconscout.com/icon/premium/png-256-thumb/wolf-3103178-2584806.png" />

         <View>
            <View style={Styles.user}>
               <Text style={Styles.greeting}>
                  Olá,
               </Text>

               <Text style={Styles.username}>
                  Eduardo
               </Text>
            </View>

            <Text style={Styles.message}>
               Hoje é dia de vitória
            </Text>
         </View>


      </View>
   )
}