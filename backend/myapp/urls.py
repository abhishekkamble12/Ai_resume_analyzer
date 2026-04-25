from django.urls import path
from .views import registerview, loginview, dashboard

urlpatterns = [
    path('signup/', registerview.as_view(), name='signup'),
    path('login/', loginview.as_view(), name='login'),
    path('dash/', dashboard.as_view(), name='dashboard'),
]
