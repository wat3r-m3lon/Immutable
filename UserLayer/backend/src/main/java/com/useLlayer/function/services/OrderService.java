package com.useLlayer.function.services;

import com.useLlayer.function.models.Order;
import com.useLlayer.function.payload.request.OrderRequest;
import com.useLlayer.function.payload.request.UpdateOrderStatusRequest;
import com.useLlayer.function.payload.response.OrderResponse;
import org.springframework.http.ResponseEntity;

import java.io.IOException;
import java.util.List;

public interface OrderService {
    ResponseEntity<?> createOrderForUser(Long userId, OrderRequest orderRequest);
    ResponseEntity<List<Order>> getOrdersByUserId(Long userId);
    OrderResponse getOrdersAndFilesByUserId(Long userId) throws IOException;
    ResponseEntity<?> updateOrderStatus(Long orderId, UpdateOrderStatusRequest updateOrderStatusRequest);
    ResponseEntity<?> deleteOrder(Long orderId);
    ResponseEntity<Order> getOrderById(Long orderId);
    ResponseEntity<List<Order>>  getOrdersByInstitutionEmail(String institutionEmail);

    ResponseEntity<?> updateOrder(Long orderId, OrderRequest orderRequest);
}
