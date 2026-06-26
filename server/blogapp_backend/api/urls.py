from django.urls import path
from . import views

urlpatterns = [
    path('addblog/' , views.addBlog),
    path('Homepage/' , views.allBlog),
    path('delete/<int:pk>' , views.deleteBlog)
]
