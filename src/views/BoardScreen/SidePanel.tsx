import {
  Box,
  Button,
  Dialog,
  IconButton,
  Input,
  Modal,
  Typography,
  styled,
} from '@mui/material';
import { AddCircle } from '@mui/icons-material';
import { Flex } from '../../components/Flex';
import React, { useState } from 'react';

const Wrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[900],
  width: 400,
}));

interface AddUserDialogProps {
  open: boolean;
  onClose: (args?: { newUser: string }) => void;
}

const AddUserDialog = ({ open, onClose }: AddUserDialogProps) => {
  const [userInput, setUserInput] = useState('');

  return (
    <Dialog
      open={open}
      onClose={() => {
        onClose();
      }}
    >
      <Typography>Add User</Typography>
      <Input
        value={userInput}
        onChange={(e) => {
          setUserInput(e.target.value);
        }}
      />
      <Button
        onClick={() => {
          onClose({ newUser: userInput });
          setUserInput('');
        }}
      >
        Save
      </Button>
    </Dialog>
  );
};

interface SidePanelProps {
  users: string[];
  setUsers: React.Dispatch<React.SetStateAction<string[]>>;
  setSelectedUser: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export const SidePanel = ({
  users,
  setUsers,
  setSelectedUser,
}: SidePanelProps) => {
  const [showAddUser, setShowAddUser] = useState(false);

  return (
    <Wrapper>
      <AddUserDialog
        open={showAddUser}
        onClose={(args) => {
          if (args?.newUser) {
            setUsers((users) => [...users, args.newUser]);
          }
          setShowAddUser(false);
        }}
      />
      <Flex alignItems="center" justifyContent="space-between">
        <Typography>Users</Typography>
        <IconButton
          onClick={() => {
            setShowAddUser(true);
          }}
        >
          <AddCircle />
        </IconButton>
      </Flex>
      <Box>
        {users.map((user, index) => {
          return (
            <Box
              key={`side_pane_user_${index}`}
              onClick={() => {
                setSelectedUser(user);
              }}
            >
              <Typography>{user}</Typography>
            </Box>
          );
        })}
      </Box>
    </Wrapper>
  );
};
