interface AuthRepository {
     suspend fun register(email: String, userName: String, regNo: String, password: String, phoneNum: String) : Resource<AuthResult>
     suspend fun login(email: String, password: String) : Resource<AuthResult>
     suspend fun forgotPassword(email: String): Resource<Any>
}
