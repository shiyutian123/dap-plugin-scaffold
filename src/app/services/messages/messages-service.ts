import { Injectable } from '@angular/core';
import { NzMessageService, NzNotificationService } from 'ng-zorro-antd';

/**
 *
 * 通用消息提示服务
 *
 */
@Injectable()
export class MessagesService {
    constructor(private messageService: NzMessageService,
        private nzNotificationService: NzNotificationService) { }
    public showSuccessMessage(content: string): void {
        this.messageService.success(content);
    }

    public showWarningMessage(content: string): void {
        this.messageService.warning(content);
    }

    public showErrorMessage(content: string): void {
        this.messageService.error(content);
    }
    public showNotificationErrorMessage(title: string, content: string): void {
        this.nzNotificationService.create('error', title, content);
    }
    public showNotificationWarnMessage(title: string, content: string): void {
        this.nzNotificationService.create('warning', title, content);
    }

    /**
     * 通知提醒框
     * @param type 类型 success|info|warning|error
     * @param title 标题
     * @param msg 消息内容
     */
    public createNotification(type, title, msg): void {
        this.nzNotificationService.create(type, title, msg);
    }
}
