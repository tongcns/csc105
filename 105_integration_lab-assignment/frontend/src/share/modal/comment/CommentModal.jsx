import { Box, Button, Card, Modal, TextField } from '@mui/material';
import React, { useState, useEffect, useContext } from 'react';
import { useKeyDown } from '../../../hooks/useKeyDown';
import CommentCard from './components/CommentCard';

import Axios from '../../AxiosInstance';
import { AxiosError } from 'axios';
import GlobalContext from '../../Context/GlobalContext';
import Cookies from 'js-cookie';

const CommentModal = ({ open = false, handleClose = () => {} }) => {
  const { user, setStatus } = useContext(GlobalContext);
  const [textField, setTextField] = useState('');
  const [textFieldError, settextFieldError] = useState('');
  const [comments, setComments] = useState([]);

  useKeyDown(() => {
    handleAddComment();
  }, ['Enter']);

  useEffect(() => {
    // TODO: Implement get notes by user's token
    const userToken = Cookies.get('UserToken');
    if (userToken !== undefined && userToken !== 'undefined') {
      Axios.get('/comment', { headers: { Authorization: `Bearer ${userToken}` } }).then((res) => {
        setComments(
          res.data.data.map((el) => {
            return { id: el.id, msg: el.text };
          })
        );
      });
    }
  }, [user]);

  const handleAddComment = async () => {
    // TODO implement logic
    if (!validateForm()) return;
    
    try {
      const userToken = Cookies.get('UserToken');
      const response = await Axios.post(
        '/comment',
        { text: textField },
        {
          headers: { Authorization: `Bearer ${userToken}` },
        }
      );
      if (response.data.success) {
        setStatus({ severity: 'success', msg: 'Create comment successfully' });
        setComments((comments) => [...comments, { id: response.data.data.id, msg: textField }]);
        console.log('Create comment successfully');
        setTextField('');
      }
    } catch (e) {
      setTextField('');
      if (e instanceof AxiosError)
        if (e.response)
          return setStatus({
            msg: e.response.data.error,
            severity: 'error',
          });
      return setStatus({
        msg: e.message,
        severity: 'error',
      });
    }
  };

  const validateForm = () => {
    let isValid = true;
    if (!textField) {
      settextFieldError('Comment is required');
      isValid = false;
    }
    return isValid;
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Card
        sx={{
          width: { xs: '60vw', lg: '40vw' },
          maxWidth: '600px',
          maxHeight: '400px',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '16px',
          backgroundColor: '#ffffffCC',
          p: '2rem',
        }}
      >
        <Box
          sx={{
            display: 'flex',
          }}
        >
          <TextField
            value={textField}
            onChange={(e) => setTextField(e.target.value)}
            fullWidth
            error={textFieldError !== ''}
            helperText={textFieldError}
            placeholder="Type your comment"
            variant="standard"
          />
          <Button onClick={handleAddComment}>Submit</Button>
        </Box>
        <Box
          sx={{
            overflowY: 'scroll',
            maxHeight: 'calc(400px - 2rem)',
            '&::-webkit-scrollbar': {
              width: '.5rem', // chromium and safari
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#999999',
              borderRadius: '10px',
            },
          }}
        >
          {comments.map((comment) => (
            <CommentCard comment={comment} key={comment.id} setComments={setComments} />
          ))}
        </Box>
      </Card>
    </Modal>
  );
};

export default CommentModal;
