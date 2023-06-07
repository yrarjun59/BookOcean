from django.urls import path
from . import views

urlpatterns = [
   path('users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('users/register/', views.registerUser, name='register-user'),
    path('users/', views.getUsers, name='get-users'),
    path('users/profile/', views.getUserProfile, name='user-profile')
]
