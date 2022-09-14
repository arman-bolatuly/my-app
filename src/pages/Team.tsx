import { Box, Text } from '@chakra-ui/react'
import Arman from './Arman'
import Designer from './Designer'
import Erlan from './Erlan'
import Miko from './Miko'
import Temir from './Temir'

function Team() {
  return (
    <>
      <Text display="flex" justifyContent='center' marginTop={5}>Наша команда</Text>
      <Box display='flex' flexWrap="wrap" mx='20%' justifyContent='center'>
        
        <Box px={5}>
            <Arman/>
        </Box>
        <Box px={5}>
            <Miko/>
        </Box>
        <Box px={5}>
            <Designer/>
        </Box>
        <Box px={5}>
            <Erlan/>
        </Box>
        <Box px={5}>
            <Temir />
        </Box>
      </Box>
    </>
  )
}

export default Team
