class DefaultMainRepository : MainRepository {    
override suspend fun uploadProfilePicture(uri: Uri): Resource<Any> {
        return withContext(Dispatchers.IO) {
            safeCall {
                val uid = firebaseAuth.uid!!
                val imageUploadResult = firebaseStorage.getReference(uid).putFile(uri).await()
                val imageUrl = imageUploadResult?.metadata?.reference?.downloadUrl?.await().toString()
                databaseReference.child(uid).child("profilePictureUrl").setValue(imageUrl)
                Resource.Success(Any())
            }
        }
    }
}
