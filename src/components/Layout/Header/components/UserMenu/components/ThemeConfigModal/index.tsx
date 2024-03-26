import Image from 'next/image'
import { Box, Button, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { useColorMode } from '@/core/context/ColorModeContext/ColorModeContext.provider'
import Modal from '@/components/_commons/Modal'
import light from '../../../../../../../../public/theme-light.svg'
import dark from '../../../../../../../../public/theme-dark.svg'

export default function ThemeConfigModal(props: ThemeConfigModalProps) {
  const [colorMode, darkMode, lightMode] = useColorMode()

  const isDarkMode = colorMode === 'dark'

  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      title="Configurar tema"
    >
      <div>
        <Typography id="modal-modal-description">
          Selecione o tipo de tema entre modo claro e escuro.
        </Typography>
        <Grid container spacing={2} mt={1}>
          <Grid xs={6}>
            <Button sx={{ padding: 0 }} onClick={() => lightMode()}>
              <Box
                sx={{
                  border: '2px dashed transparent',
                  borderWidth: '2px',
                  borderStyle: 'dashed',
                  borderColor: !isDarkMode ? 'green' : 'transparent',
                  padding: 1,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Image
                  src={light}
                  alt="Image that represent light theme"
                  width={150}
                />
              </Box>
            </Button>
          </Grid>
          <Grid xs={6}>
            <Button sx={{ padding: 0 }} onClick={() => darkMode()}>
              <Box
                sx={{
                  border: '2px dashed transparent',
                  borderWidth: '2px',
                  borderStyle: 'dashed',
                  borderColor: isDarkMode ? 'green' : 'transparent',
                  padding: 1,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Image
                  src={dark}
                  alt="Image that represent dark theme"
                  width={150}
                />
              </Box>
            </Button>
          </Grid>
        </Grid>
      </div>
    </Modal>
  )
}
