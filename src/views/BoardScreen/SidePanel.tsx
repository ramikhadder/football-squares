import {
  Box,
  Button,
  Dialog,
  IconButton,
  Input,
  Modal,
  Stack,
  Typography,
  styled,
} from '@mui/material';
import { AddCircle } from '@mui/icons-material';
import { Flex } from '../../components/Flex';
import React, { useState } from 'react';
import { SIDE_PANEL_WIDTH } from './constants';
import { User } from './types';
import { v4 as uuidv4 } from 'uuid';

const Panel = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  width: SIDE_PANEL_WIDTH,
}));

const UserRow = styled(Stack)<{ isSelected: boolean }>(
  ({ theme, isSelected }) => ({
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    padding: 8,
    cursor: 'pointer',
    backgroundColor: isSelected ? theme.palette.grey[700] : undefined,
    '&:hover': {
      backgroundColor: isSelected
        ? theme.palette.grey[600]
        : theme.palette.grey[800],
    },
  }),
);

interface AddUserDialogProps {
  open: boolean;
  onClose: (args?: { newUser: User }) => void;
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
      <Stack p="24px">
        <Typography>Add User</Typography>
        <Input
          value={userInput}
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
        />
        <Button
          onClick={() => {
            onClose({ newUser: { id: uuidv4(), name: userInput } });
            setUserInput('');
          }}
        >
          Save
        </Button>
      </Stack>
    </Dialog>
  );
};

interface SidePanelProps {
  selectedUserId: string | undefined;
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  setSelectedUser: React.Dispatch<React.SetStateAction<User | undefined>>;
}

export const SidePanel = ({
  selectedUserId,
  users,
  setUsers,
  setSelectedUser,
}: SidePanelProps) => {
  const [showAddUser, setShowAddUser] = useState(false);

  return (
    <Panel>
      <AddUserDialog
        open={showAddUser}
        onClose={(args) => {
          if (args?.newUser) {
            setUsers((users) => [...users, args.newUser]);
          }
          setShowAddUser(false);
        }}
      />
      <Flex alignItems="center" justifyContent="space-between" padding="16px">
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
            <UserRow
              key={`side_pane_user_${index}`}
              isSelected={user.id === selectedUserId}
              onClick={() => {
                setSelectedUser(user.id !== selectedUserId ? user : undefined);
              }}
            >
              <Typography>{user.name}</Typography>
            </UserRow>
          );
        })}
      </Box>
    </Panel>
  );
};
