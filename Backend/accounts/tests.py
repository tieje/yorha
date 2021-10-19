from django.contrib.auth import get_user_model
from django.test import TestCase


class TestCustomUser(TestCase):
    """Tests `CustomUser`."""

    def test_create_user(self):
        """Should create a custom user."""
        CustomUser = get_user_model()
        test_user = CustomUser.objects.create_user(
            username = 'test_username',
            email = 'test@email.com',
            password = 'testpass123',
        )

        self.assertEqual(test_user.username, 'test_username')
        self.assertEqual(test_user.email, 'test@email.com')
        self.assertEqual(test_user.location.coords, (0.0, 0.0))
        self.assertEqual(test_user.gender, 'non-binary')
        self.assertTrue(test_user.is_active)
        self.assertFalse(test_user.is_staff)
        self.assertFalse(test_user.is_superuser)
