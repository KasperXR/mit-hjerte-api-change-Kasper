import React from 'react'
import QRCode from 'react-qr-code'
import * as MUI from '@mui/material'
import shallow from 'zustand/shallow'
import { useStore } from '../../util/store'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 428,
  height: 428,
  bgcolor: 'background.paper',
  boxShadow: 24,
}

function QRCodeComponent() {
  const QRCodeVal = useStore((state) => state.QRCode)
  const qrModalOpen = useStore((state) => state.QRModalOpen)
  const toggleQrModalOpen = useStore((state) => state.toggleQRModal)
  const loading = useStore((state) => state.fetchingQRCode)
  const setLoading = useStore((state) => state.setFetchingQRCode)

  console.log('qrCode', QRCodeVal)

  return (
    <MUI.Dialog
      open={qrModalOpen}
      onClose={(e, reason) => {
        if (reason !== 'backdropClick') {
          toggleQrModalOpen(false)
        }
      }}
      maxWidth="lg"
      fullWidth
      sx={{ backgroundColor: 'rgba(69, 69, 69, 0.8)' }}
      aria-labelledby="modal-modal-title"
      keepMounted={false}
    >
      <MUI.DialogTitle id="modal-modal-title">
        <MUI.Typography variant="h6" component="p">
          QR Kode
        </MUI.Typography>
      </MUI.DialogTitle>
      <MUI.DialogContent>
        <MUI.Grid alignItems="center" justifyContent="center" sx={{ pt: 2, pb: 2 }} container>
          {!loading && QRCodeVal !== '' ? (
            <QRCode value={`${QRCodeVal}`} size={512} />
          ) : (
            <>
              <MUI.Grid item xs={12}>
                <MUI.Typography align="center" variant="h4" paragraph>
                  <i>Vent venligst imens vi laver videoen om dit hjerte</i>
                </MUI.Typography>
                <MUI.Divider sx={{ mb: 2 }} />
              </MUI.Grid>
              <MUI.CircularProgress size={94} />
            </>
          )}
        </MUI.Grid>
      </MUI.DialogContent>
      <MUI.DialogActions>
        <MUI.Button
          onClick={() => {
            if (QRCodeVal === '') {
              setLoading(false)
            }
            toggleQrModalOpen(false)
          }}
          color="primary"
        >
          Luk
        </MUI.Button>
      </MUI.DialogActions>
    </MUI.Dialog>
  )
}

export default QRCodeComponent
