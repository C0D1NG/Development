    private val smsSentReceiver by lazy { SmsSentBroadcastReciever() }
    private val smsDeliveredBroadcastReceiver by lazy { SmsDeliveredBroadcastReceiver() }
    
    
        private fun sendSms(
        count: Int,
        phoneNumber: String,
        message: String,
        sentPI: PendingIntent,
        deliveredPI: PendingIntent
    ) {
        try {
            viewModelScope.launch {
                    val sms = SmsManager.getDefault()
                    sms.sendTextMessage(phoneNumber, null, message, sentPI, deliveredPI)
            }
        } catch (e: Exception) {
            Timber.d("sendSms: ${e.message}")
        }
    }
