class DefaultAuthRepository : AuthRepository {

    override suspend fun register(email: String, userName: String, regNo: String, password: String, phoneNum: String): Resource<AuthResult> {
        return withContext(Dispatchers.IO) {
            safeCall {
                val result = firebaseAuth.createUserWithEmailAndPassword(email, password).await()
                firebaseAuth.currentUser?.sendEmailVerification()?.await()
                Resource.Success(result)
            }
        }
    }

    override suspend fun login(email: String, password: String): Resource<AuthResult> {
        return withContext(Dispatchers.IO){
            safeCall {
                val result = firebaseAuth.signInWithEmailAndPassword(email,password).await()
                Resource.Success(result)
            }
        }
    }

    override suspend fun forgotPassword(email: String): Resource<Any> {
        return withContext(Dispatchers.IO){
            safeCall {
                firebaseAuth.sendPasswordResetEmail(email).await()
                Resource.Success(Any())
            }
        }
    }
}
