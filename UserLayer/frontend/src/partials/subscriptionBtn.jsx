import React from 'react';
import { Modal } from 'antd';
import SubscriptionService from "../services/subscription.service";

function SubscriptionButton() {
    function showConfirmModal() {
        Modal.confirm({
            title: 'Confirm Subscription',
            content: 'Are you sure you want to subscribe?',
            onOk() {
                console.log('User confirmed subscription');
                SubscriptionService.createSubscription(1)
                    .then(response => {
                        console.log('Subscription created:', response);
                        // 这里可以根据服务端返回的响应，执行一些逻辑代码
                    })
                    .catch(error => {
                        console.error('Error creating subscription:', error);
                        // 这里可以处理错误情况
                    });
            },
            onCancel() {
                console.log('User canceled subscription');
                // 如果用户点击取消，什么也不做
            },
        });
    }

    function handleClick(event) {
        event.preventDefault(); // 阻止默认行为，避免页面跳转
        showConfirmModal();
    }

    return (
        <a
            className="uppercase font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
            href="#"
            onClick={handleClick}
        >
            Subscribe
        </a>
    );
}

export default SubscriptionButton;
