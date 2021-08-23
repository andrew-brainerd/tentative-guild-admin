import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const YellowButton = styled(Button)({
  background: '#ffe17d',
  color: 'black',
  '&:disabled': {
    background: '#665a32'
  },
  '&:hover': {
    background: '#fff0be'
  }
});

export default YellowButton;
