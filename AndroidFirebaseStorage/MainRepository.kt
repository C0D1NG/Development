interface MainRepository {
    suspend fun uploadProfilePicture(uri: Uri): Resource<Any>
}
