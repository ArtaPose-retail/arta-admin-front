import React from 'react'
import Title from '../../components/UI/Title'
import { Box, Button } from '@mui/material'
import { center } from "../../styles/theme"
import CreateUserModal from '../../components/User/CreateUserModal'
import UserList from '../../components/User/UserList'


export const UserParent = () => {
  return (
    <Box sx={{ p: 1 }}>
      <Box sx={{ ...center, justifyContent: "space-between" }}>

        <Title
          title={"کاربران"}
          Typoprops={{
            fontSize: "24px",
            fontWeight: 700,
            color: (theme) => theme.palette.text.card,
          }}
        />
        <CreateUserModal />
      </Box>


      <Box
        sx={{
          bgcolor: (theme) => theme.background.box,
          width: "100%",
          borderRadius: "18px",
          p: 2,
          mt: 1,
          height: "85dvh"
        }}
      >
        <UserList />
      </Box>

    </Box>
  )
}

