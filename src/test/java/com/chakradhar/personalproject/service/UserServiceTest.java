package com.chakradhar.personalproject.service;

import com.chakradhar.personalproject.model.UserModel;
import com.chakradhar.personalproject.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private PasswordEncoder passwordEncoder;

    @InjectMocks
    private UserService userService;

    @Test
    void testSaveUser() {
        UserModel user = new UserModel();
        user.setPassword("rawPass");

        Mockito.when(passwordEncoder.encode("rawPass")).thenReturn("encodedPass");
        Mockito.when(userRepository.save(user)).thenReturn(user);

        userService.saveUser(user);

        assertEquals("encodedPass", user.getPassword());
        Mockito.verify(userRepository).save(user);
    }

    @Test
    void testLoginUser_Success() {
        UserModel user = new UserModel();
        user.setPassword("encodedPass");

        Mockito.when(userRepository.findByEmail("test@example.com")).thenReturn(Optional.of(user));
        Mockito.when(passwordEncoder.matches("rawPass", "encodedPass")).thenReturn(true);
        UserModel result = userService.loginUser("test@example.com", "rawPass");
        assertEquals(user, result);
    }

    @Test
    void testLoginUser_InvalidPassword() {
        UserModel user = new UserModel();
        user.setPassword("encodedPass");

        Mockito.when(userRepository.findByEmail("test@example.com")).thenReturn(Optional.of(user));
        Mockito.when(passwordEncoder.matches("wrongPass", "encodedPass")).thenReturn(false);

        assertThrows(ResponseStatusException.class, () -> 
            userService.loginUser("test@example.com", "wrongPass")
        );
    }

    @Test
    void testLoginUser_UserNotFound() {
        Mockito.when(userRepository.findByEmail("notfound@example.com")).thenReturn(Optional.empty());

        assertThrows(ResponseStatusException.class, () -> 
            userService.loginUser("notfound@example.com", "pass")
        );
    }
}
